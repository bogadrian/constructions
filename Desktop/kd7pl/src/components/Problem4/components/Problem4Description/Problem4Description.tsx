import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import search from "./assets/search.png";

const styles = {
  root: {
    color: "text.secondary"
  },
  img: {
    my: 2,
    mx: "auto",
    width: "100%",
    objectFit: "contain",
    maxWidth: 500
  }
};

const Problem4Description = () => {
  return (
    <Grid sx={styles.root} container direction="column">
      <Typography variant="body1">
        In this section, we want you to create a blog page where all posts are
        listed. You need to fetch dataset from{" "}
        <a href="https://jsonplaceholder.typicode.com/posts">
          https://jsonplaceholder.typicode.com/posts
        </a>
        . At the above of the page, you need to create a search box where users
        can filter the posts. This Search box should have autocomplete feature
        like in the below example;
      </Typography>
      <Box component="img" src={search} alt="Example search component" />
      <Typography variant="body1">
        The autocomplete suggestion will be done according to title of the posts
        those you fetched from the api that given on the above. (Try to
        implement suggestion function in an efficient way.)
      </Typography>
      <List>
        <ListItem>* Show at most 5 suggestions</ListItem>
        <ListItem>
          * suggestions should include only title of the posts
        </ListItem>
        <ListItem>
          * Fetch post comments and show it to user if user select a suggestion.
          api: https://jsonplaceholder.typicode.com/comments?postId=postId.
        </ListItem>
      </List>
    </Grid>
  );
};

export default Problem4Description;
