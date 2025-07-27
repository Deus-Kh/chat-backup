
export default function(hash) {
    let [r, g, b] = hash.substr(0, 3).split('').map(char => {
        const code = char.charCodeAt(0);
        return code > 255 ? 255 : code;
    });

    const toHex = (value) => {
        const hex = value.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    const toHexString = (r, g, b) => `#${toHex(r)}${toHex(g)}${toHex(b)}`;

    const lighten = (value, percent) => {
        return Math.min(255, Math.floor(value + (255 - value) * (percent / 100)));
    };

    const color = toHexString(r, g, b);
    const colorLighten = toHexString(
        lighten(r, 30),
        lighten(g, 30),
        lighten(b, 30)
    );

    return { color, colorLighten };
}