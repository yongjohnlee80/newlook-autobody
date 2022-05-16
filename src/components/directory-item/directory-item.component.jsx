import { DirectoryItemContainer } from "./directory-item.styles.jsx";

export const DirectoryItem = ({item}) => {
    const { imageUrl, title, desc } = item;
    return (
        <>
            <DirectoryItemContainer>
                <img src={imageUrl}/>
                <div className="directory-item-body">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            </DirectoryItemContainer>
        </>
    );
};
