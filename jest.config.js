module.exports = {
    verbose: true,
    testEnvironment: "jest-environment-jsdom",
    moduleNameMapper: {
        "@/(.*)$": "<rootDir>/src/$1",
        "^.+.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
            "jest-transform-stub",
    },
    moduleDirectories: [".yarn", "node_modules"],
    moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest",
        ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
            "jest-transform-stub",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
