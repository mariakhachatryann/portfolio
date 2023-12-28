export const useUtils = () => {
    const linkScroll = async (elm: any) => {
        const elem = document.querySelector(`[name='${elm}']`);
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return { linkScroll }
}