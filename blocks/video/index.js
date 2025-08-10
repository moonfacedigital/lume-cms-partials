export default {
    name: "video",
    label: "Video",
    type: "object",
    category: ["Media"],
    fields: [
        {
            name: "src",
            label: "Source",
            type: "text",
        },
        {
            name: "alt",
            label: "Alternative text",
            type: "text",
        },
        {
            name: "caption",
            label: "Caption",
            type: "text",
        },
        {
            name: "src",
            label: "Source",
            type: "text",
            description:
                "URL of the video file or an embed URL from a service like YouTube or Vimeo.",
        },
        {
            name: "caption",
            label: "Caption",
            type: "text",
        },
        {
            name: "playbackOptions",
            label: "Playback options",
            type: "object",
            fields: [
                {
                    name: "autoplay",
                    label: "Autoplay",
                    type: "checkbox",
                    description: "Automatically play the video when it loads.",
                },
                {
                    name: "loop",
                    label: "Loop",
                    type: "checkbox",
                    description: "Repeat the video when it finishes.",
                },
                {
                    name: "muted",
                    label: "Muted",
                    type: "checkbox",
                    description: "Mute the video by default.",
                },
                {
                    name: "controls",
                    label: "Controls",
                    type: "checkbox",
                    description: "Show video playback controls.",
                },
            ],
        },
        {
            name: "advanced",
            label: "Advanced",
            type: "object",
            fields: [
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
