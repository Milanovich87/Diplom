interface ImageSrc {
    image: string | undefined
    alt: string | undefined
    className?: string | undefined
}
export const Image = ({ image, alt, className }: ImageSrc) => {
    return (
        <>
            <img className={className} src={image} alt={alt} />
        </>
    )
}