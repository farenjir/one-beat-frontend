/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    // disable: false
    // disable: process.env.NODE_ENV !== 'production'
});

module.exports = withPWA({

});