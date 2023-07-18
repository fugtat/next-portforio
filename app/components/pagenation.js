import Link from 'next/link'
const Pagenation = (props) => {
    return (
        <h2 className="pagenationWrapper">
            {Array.from({ length: props.numberPages }, (_, i) => (
                <Link key={i + 1} href={ i === 0 ? `/blog` : `/blog/page/${i + 1}`}>
                    {i +1}
                </Link>
            ))}
        </h2>
    )
}

export default Pagenation