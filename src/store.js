import { reactive } from 'vue'

export const store = reactive({
    headerLinks: [
        {
            title: "Home",
            url: "#"
        },
        {
            title: "About",
            url: "#"
        },
        {
            title: "Services",
            url: "#services"
        },
        {
            title: "Training",
            url: "#training"
        },
        {
            title: "Blogs",
            url: "#blogs"
        },
    ]
});