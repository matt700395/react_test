import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height:50,
        borderRadius:25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize:16,
        fontWeight: "bold",
    },
    commentText: {
        color: "blackl",
        fontSize: 16,
    },
};

function Comment(props) {

    return (
        <div>
            <h1>댓글창 만들기 첫번째 컴포넌트 입니다.</h1>
        </div>
    );
}

export default Comment;