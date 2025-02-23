import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {Box, Button, Typography} from "@mui/material";
import { getS3Files } from "../../utils/getS3Files";
import { awsConfig } from "../../utils/awsConfig";
import "./ImageShowCase.css";

export default function ImageShowcase({ rootFolder }) {
    const [sections, setSections] = useState({});
    const refs = useRef({}); // Store refs for each section

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const files = await getS3Files(rootFolder);
                const sectionMap = {};

                files.forEach((file) => {
                    const fileName = file.split("/").pop();
                    const parts = fileName.split("_");

                    if (parts.length > 1 && parts[0] !== 'IMG') {
                        const section = parts[0];
                        if (!sectionMap[section]) sectionMap[section] = [];
                        sectionMap[section].push(`https://bluecaraweb.s3.${awsConfig.region}.amazonaws.com/${file}`);
                    } else {
                        if (file.endsWith("/")) return;
                        if (!sectionMap["Additional"]) sectionMap["Additional"] = [];
                        sectionMap["Additional"].push(`https://bluecaraweb.s3.${awsConfig.region}.amazonaws.com/${file}`);
                    }
                });

                if (sectionMap["Additional"]) {
                    const additionalImages = sectionMap["Additional"];
                    delete sectionMap["Additional"]; // Remove it temporarily
                    sectionMap["Additional"] = additionalImages; // Add it at the end
                }

                setSections(sectionMap);
            } catch (error) {
                console.error("Error fetching images from S3:", error);
            }
        };

        fetchImages();
    }, [rootFolder]);

    const scrollToSection = (section) => {
        refs.current[section]?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const formatSectionName = (pattern) => {
        return pattern
            .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capital letters
            .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
    }

    return (
        <Box className="image-showcase-container">
            {/* Sidebar for section names */}
            <Box className="sidebar">
                {Object.entries(sections).map(([section, images], index) => (
                    <Box key={index} className="sidebar-item" onClick={() => scrollToSection(section)}>
                        <img src={images[0]} alt={`Section ${section}`} />
                        <Typography variant="body1" mt={1}>
                            {formatSectionName(section)}
                        </Typography>
                    </Box>
                ))}
            </Box>

            {/* Image Showcase */}
            <Box flex={1} display="flex" flexDirection="column" gap={3} ml={4}>
                {Object.entries(sections).map(([section, images]) => (
                    <Box key={section} className="image-section">
                        {/* Section Name (Left) */}
                        <Box
                            ref={(el) => (refs.current[section] = el)}
                            className="section-name"
                        >
                            {formatSectionName(section)}
                        </Box>

                        {/* Images (Right) */}
                        <Box className="image-grid">
                            {images.map((src, index) => {
                                const isSingleImageRow = index % 3 === 0;
                                return (
                                    <img
                                        key={index}
                                        src={src}
                                        alt={`Showcase ${index}`}
                                        className={isSingleImageRow ? "staggered" : "default"}
                                    />
                                );
                            })}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );

}

ImageShowcase.propTypes = {
    rootFolder: PropTypes.string.isRequired,
};
