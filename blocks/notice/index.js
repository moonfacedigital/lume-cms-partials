export default {
    name: "notice",
    label: "Notice",
    type: "object",
    category: ["Content"],
    description: "A notice that can display different types of messages",
    fields: [
        {
            name: "variant",
            label: "Variant",
            type: "select",
            options: [
                {
                    label: "Default",
                    value: "default",
                },
                {
                    label: "Note",
                    value: "note",
                },
                {
                    label: "Warning",
                    value: "warning",
                },
                {
                    label: "Danger",
                    value: "danger",
                },
                {
                    label: "Success",
                    value: "success",
                },
            ],
        },
        {
            name: "label",
            label: "Label",
            type: "text",
            value: "Note",
        },
        {
            name: "content",
            type: "markdown",
        },
    ],
}
