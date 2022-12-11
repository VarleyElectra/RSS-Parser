export function parsePosts(posts) {
    return posts.map(post => {
        let images = Array.from(post.getElementsByTagName('rbc_news:image'));

        let imageUrls = images.map(image => {
            if (image.getElementsByTagName('rbc_news:url').length > 0) {
                return image.getElementsByTagName('rbc_news:url')[0].innerHTML
            }
        });

        return {
            title: post.getElementsByTagName('title').length > 0
                ? post.getElementsByTagName('title')[0].innerHTML
                : '',
            link: post.getElementsByTagName('rbc_news:date').length > 0
                ? post.getElementsByTagName('link')[0].innerHTML
                : '',
            date: post.getElementsByTagName('rbc_news:date').length > 0
                ? post.getElementsByTagName('rbc_news:date')[0].innerHTML
                : '',
            time: post.getElementsByTagName('rbc_news:time').length > 0
                ? post.getElementsByTagName('rbc_news:time')[0].innerHTML
                : '',
            fullText: post.getElementsByTagName('rbc_news:full-text').length > 0
                ? post.getElementsByTagName('rbc_news:full-text')[0].innerHTML
                : '',
            announcement: post.getElementsByTagName('rbc_news:anons').length > 0
                ? post.getElementsByTagName('rbc_news:anons')[0].innerHTML
                : '',
            author: post.getElementsByTagName('author').length > 0
                ? post.getElementsByTagName('author')[0].innerHTML
                : '',
            imageUrls: imageUrls,
            showFullText: false,
        }
    })
}

export async function proxyFetch(url) {
    const CORS_PROXY = 'https://api.codetabs.com/v1/proxy?quest';
    const RSS_URL = `${CORS_PROXY}=${url}`;

    let response = await fetch(RSS_URL);
    if (response.ok) {
        return await response.text();
    } else {
        throw new Error('Wrong request')
    }
}