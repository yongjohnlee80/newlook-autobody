import "./directory-item.styles.scss";

export const DirectoryItem = ({ item }) => {
    const {imageUrl, title, desc} = item;
    return (
        <div className="directory-item-container">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="directory-item-body">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
};
