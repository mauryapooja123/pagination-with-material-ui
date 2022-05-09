import React from "react";

import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useEffect } from "react";
import axios from "axios";

function PaginationPage() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const res = await axios.get(`http://localhost:4001/posts?_page=${page}`);
    setPosts(res.data);
  };
  useEffect(() => {
    getData();
  }, [page]);

  return (
    <>
      <TableContainer>
        <Table>
          <TableBody>
            {posts.map((post) => (
              <TableRow>
                <TableCell>#{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        count={8}
        color="secondary"
        variant="outlined"
        onChange={(e, value) => setPage(value)}
      />
    </>
  );
}

export default PaginationPage;
