export const useUtils = () => {
    const linkScroll = (elm: any) => {
        const elem = document.querySelector(`[name='${elm}']`);
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return { linkScroll }
}