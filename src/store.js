import { reactive } from "vue";

export const store = reactive({
  headerLinks: [
    {
      title: "Home",
      url: "#",
    },
    {
      title: "About",
      url: "#",
    },
    {
      title: "Services",
      url: "#",
    },
    {
      title: "Training",
      url: "#",
    },
    {
      title: "Blogs",
      url: "#",
    },
  ],

  contacts: [
    {
      email: "info@example.com",
      phone: "+1(817)901 3377",
      address: "4500 Mercantile plaza,suite 300,fort worth,TX,76137,USA",
    },
  ],

  supportLinks: [
    {
      title: "Contact Us",
      url: "#",
    },
    {
      title: "Online Chat",
      url: "#",
    },
    {
      title: "Whatsapp",
      url: "#",
    },
    {
      title: "Telegram",
      url: "#",
    },
    {
      title: "Snapchat",
      url: "#",
    },
  ],

  aboutLinks: [
    {
      title: "About Us",
      url: "#",
    },
    {
      title: "Blog",
      url: "#",
    },
    {
      title: "Career",
      url: "#",
    },
    {
      title: "Job",
      url: "#",
    },
    {
      title: "In press",
      url: "#",
    },
  ],
  faqLinks: [
    {
      title: "Account",
      url: "#",
    },
    {
      title: "Orded",
      url: "#",
    },
    {
      title: "Delivery",
      url: "#",
    },
    {
      title: "Payment",
      url: "#",
    },
    {
      title: "Return",
      url: "#",
    },
  ],
});
