import { reactive } from "vue";

export const store = reactive({
    pages: [
        "home",
        "services",
        "skills",
        "partenrs",
        "blog"
    ],
    info: {
        mail: "example@name.com",
        phone: "+1(305) 1234-45678",
        openHour: "Mon-Sat-9:00-18:00",
        location: "Main Avenue,978",
        facebook: "#",
        twitter: "#",
        linkedin: "#"
    },
    about: [
        {
            text: "The Company",
            link: "#"
        },
        {
            text: "Institutional",
            link: "#"
        },
        {
            text: "Social & Events",
            link: "#"
        },
        {
            text: "innovation",
            link: "#"
        },
        {
            text: "Environment",
            link: "#"
        },
        {
            text: "Technology",
            link: "#"
        }
    ],
    transport: [
        {
            text: "Industrialized",
            link: "#"
        },
        {
            text: "Chemicals",
            link: "#"
        },
        {
            text: "Packaged Liquids",
            link: "#"
        },
        {
            text: "Construction",
            link: "#"
        },
        {
            text: "Laminated Wood",
            link: "#"
        },
        {
            text: "And others",
            link: "#"
        }
    ],
    support: [
        {
            text: "Responsibility",
            link: "#"
        },
        {
            text: "Terms of Use",
            link: "#"
        },
        {
            text: "About Cookies",
            link: "#"
        },
        {
            text: "Privacy Policy",
            link: "#"
        },
        {
            text: "Accessibility",
            link: "#"
        },
        {
            text: "Information",
            link: "#"
        }
    ],

})