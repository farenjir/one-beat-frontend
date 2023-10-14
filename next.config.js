/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public/pwa",
    disable: false
});

module.exports = withPWA({

});