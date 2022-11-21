import { reactive } from "vue";

export const store = reactive({
    pages: {
        home: "home",
        services: "services",
        skills: "skills",
        partners: "partners",
        blog: "blog"
    },
    info: {
        mail: "example@name.com",
        phone: "+1(305) 1234-45678",
        openHour: "Mon-Sat-9:00-18:00",
        facebook: "#",
        twitter: "#",
        linkedin: "#"
    },
})