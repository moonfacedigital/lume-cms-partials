export default {
    name: "image",
    label: "Image",
    type: "object",
    category: ["Media"],
    fields: [
        {
            name: "src",
            label: "Source",
            type: "file",
        },
        {
            name: "alt",
            label: "Alternative Text",
            type: "text",
        },
        {
            name: "caption",
            label: "Caption",
            type: "text",
        },
        {
            name: "advanced",
            label: "Advanced",
            type: "object",
            fields: [
                {
                    name: "loadingPriority",
                    label: "Loading priority",
                    type: "select",
                    description: "Determines when to load the image",
                    options: [
                        { label: "Standard", value: "standard" },
                        { label: "High", value: "high" },
                    ],
                },
                {
                    name: "aspectRatio",
                    label: "Aspect ratio",
                    type: "text",
                    description: "Aspect ratio for the image e.g., '16 / 9'",
                },
                {
                    name: "objectFit",
                    label: "Object fit",
                    type: "select",
                    description:
                        "How the image should be resized to fit its container",
                    options: [
                        { label: "Cover", value: "cover" },
                        { label: "Contain", value: "contain" },
                        { label: "Fill", value: "fill" },
                        { label: "None", value: "none" },
                        { label: "Scale Down", value: "scale-down" },
                    ],
                },
            ],
        },
    ],
}
