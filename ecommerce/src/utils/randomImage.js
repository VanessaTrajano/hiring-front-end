export const setRandomImage = (produto) => {
    const random = Math.floor(Math.random() * 1000);
    const link = produto.avatar;
    const imageLink = `${link}?random=${random}`;
    return imageLink;
};