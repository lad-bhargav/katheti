export const parseJSON = async(value) => {
    if (!value) return null;
    return JSON.parse(JSON.stringify(value));
}