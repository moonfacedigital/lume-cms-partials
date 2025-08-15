import button from "../button/index.js"
export default {
    name: "buttonGroup",
    label: "Button group",
    type: "object",
    category: ["Buttons"],
    description: "A group of two buttons",
    fields: [
        {
            name: "buttons",
            label: "Buttons",
            type: "object-list",
            fields: button.fields,
        },
    ],
}
