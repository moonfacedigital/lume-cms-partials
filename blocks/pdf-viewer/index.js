export default {
    name: "pdf",
    label: "PDF Viewer",
    type: "object",
    category: ["Media"],
    description: "An interactive inline PDF viewer",
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
    ],
}
