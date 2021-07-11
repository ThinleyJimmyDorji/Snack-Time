import React from "react";
import styled from "styled-components";
import { useState } from "react";

//material UI
import { withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

function ReviewModal(props) {
  const StyledRating = withStyles({
    iconFilled: {
      color: "#28DF99",
    },
    iconHover: {
      color: "#00bf88",
    },
  })(Rating);

  const [editorText, setEditorText] = useState("");
  const [rating, setRating] = useState(0);

  const reset = (e) => {
    setEditorText("");
    props.handleClick(e);
  };
  console.log(props.showModal);
  return (
    <Container>
      <Content>
        <Header>
          <WriteReview>
            <span>Write a review</span>
          </WriteReview>
        </Header>
        <SharedContent>
          <div class="shared-content">
            <UserInfo>
              <img src="/images/user.svg" alt="" />
            </UserInfo>
            <PostButton disabled={!editorText ? true : false}>
              <span>Post</span>
            </PostButton>
          </div>
          <Editor>
            <div class="rating">
              <Box component="fieldset" mb={3} borderColor="transparent">
                <StyledRating
                  name="simple-controlled"
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                />
              </Box>
            </div>
            <div>
              <textarea
                value={editorText}
                onChange={(e) => setEditorText(e.target.value)}
                placeholder="Tell us what you think about the item..."
                autoFocus={true}
              />
            </div>
          </Editor>
        </SharedContent>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  margin-bottom: 150px;
`;
const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  left: 30px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;
const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    height: 30px;
    width: 30px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    border: none;
    background: white;
    svg,
    img {
      pointer-events: none;
    }
  }
`;
const WriteReview = styled.div`
  background-color: rgba(112, 76, 182, 0.1);
  width: 150px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s;
  margin: 0px 10px;
  margin-left: 50px;
  span {
    font-size: 12px;
    color: rgb(112, 76, 182);
    letter-spacing: 1px;
  }
  &:hover,
  &:focus {
    border: 1px solid rgba(112, 76, 182, 0.5);
  }

  &:active {
    background-color: rgba(112, 76, 182, 0.2);
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;

  .shared-content {
    display: flex;
    align-items: center;
  }
`;
const UserInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    height: 24px;
    width: 24px;
    background-clip: content-box;
    border: 2ps solid transparent;
    border-radius: 50%;
  }
  span {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;
    margin-left: 5px;
  }
`;
const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    height: 200px;
    resize: none;
    border: 1px solid rgba(112, 76, 182, 0.5);
  }
  input {
    width: 100;
    height: 200px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;
const PostButton = styled.div`
  background-color: rgba(112, 76, 182, 0.1);
  width: 150px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s;
  margin: 0px 10px;
  margin-left: 50px;
  span {
    font-size: 12px;
    color: rgb(112, 76, 182);
    letter-spacing: 1px;
  }
  &:hover,
  &:focus {
    border: 1px solid rgba(112, 76, 182, 0.5);
  }

  &:active {
    background-color: rgba(112, 76, 182, 0.2);
  }
`;

export default ReviewModal;
