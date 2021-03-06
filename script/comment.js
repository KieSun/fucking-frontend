const axios = require("axios");
const {
  event: {
    comment,
    issue: { number },
  },
} = JSON.parse(process.env.GITHUB_CONTEXT);
const {
  body,
  updated_at,
  html_url,
  id,
  user: { avatar_url, login },
} = comment;
const host = process.env.COMMENTHOST;

axios.post(host, {
  issueId: number,
  commentId: id,
  htmlUrl: html_url,
  userName: login,
  avatarUrl: avatar_url,
  content: body,
  updatedAt: updated_at,
});
