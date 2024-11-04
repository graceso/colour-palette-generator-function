/**
 * Colour Palette Generator Function
 *
 * This module provides functionality to generate and display unique colour palettes with hexadecimal codes.
 */

const MAX_HEX_VALUE = 0xFFFFFF;

/**
 * Utility class for colour generation and palette management.
 */
class colourPaletteGenerator {
    /**
     * Generates a random hexadecimal colour code.
     *
     * @returns {string} A random hex colour code in the format '#RRGGBB'.
     */
    static generateRandomHexcolour() {
        const randomInt = Math.floor(Math.random() * (MAX_HEX_VALUE + 1));
        const hex = randomInt.toString(16).toUpperCase().padStart(6, '0');
        return `#${hex}`;
    }

    /**
     * Generates a palette of unique hexadecimal colour codes.
     *
     * @param {number} count - The number of unique colours to generate.
     * @returns {string[]} An array containing unique hex colour codes.
     * @throws {TypeError} If count is not a positive integer.
     */
    static generateUniquePalette(count) {
        if (!Number.isInteger(count) || count <= 0) {
            throw new TypeError("Count must be a positive integer.");
        }

        const palette = new Set();

        while (palette.size < count) {
            palette.add(this.generateRandomHexcolour());
        }

        return Array.from(palette);
    }

    /**
     * Displays the colour palette in the console.
     *
     * @param {string[]} palette - An array of hex colour codes.
     */
    static displayPalette(palette) {
        console.log("Unique colour palette:");
        palette.forEach((colour, index) => {
            console.log(`${index + 1}: ${colour}`);
        });
    }
}

/**
 * Main function to generate and display a unique colour palette.
 *
 * @param {number} numberOfColours - The number of unique colours to generate and display.
 */
function main(numberOfColours) {
    try {
        const colourPalette = colourPaletteGenerator.generateUniquePalette(numberOfColours);
        colourPaletteGenerator.displayPalette(colourPalette);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

// Example Usage
const DESIRED_NUMBER_OF_COLOURS = 5;
main(DESIRED_NUMBER_OF_COLOURS);
