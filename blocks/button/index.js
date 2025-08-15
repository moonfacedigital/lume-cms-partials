export default {
    name: "button",
    label: "Button",
    type: "object",
    category: ["Buttons"],
    description: "An element that runs an action when clicked",
    fields: [
        {
            name: "variant",
            label: "Variant",
            type: "select",
            options: [
                { label: "Primary", value: "primary" },
                { label: "Secondary", value: "secondary" },
                { label: "Ghost", value: "ghost" },
                { label: "Link", value: "link" },
                { label: "Danger", value: "danger" },
            ],
        },
        {
            name: "action",
            label: "Action",
            type: "object",
            fields: [
                {
                    name: "type",
                    label: "Type",
                    type: "select",
                    options: [
                        { label: "Link", value: "link" },
                        {
                            label: "JS expression",
                            value: "(e) => {}",
                            description:
                                "A JavaScript expression to run on click",
                        },
                    ],
                },
                {
                    name: "data",
                    label: "Data",
                    type: "combobox",
                    async init(field, { data }, doc) {
                        field.options = await globalThis.getPages(cms, "pages")
                    },
                },
            ],
        },
        {
            name: "text",
            label: "Text",
            description: "The text to display on the button",
            type: "text",
        },
        {
            name: "advanced",
            label: "Advanced",
            type: "object",
            fields: [
                {
                    name: "width",
                    label: "Width",
                    type: "select",
                    options: [
                        { label: "Auto", value: "auto" },
                        { label: "Full", value: "full" },
                    ],
                },
            ],
        },
    ],
}
