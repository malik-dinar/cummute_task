import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ err: "token is missing" });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ err });

    const { _id } = decoded;
    req.userId = _id;

    next();
  });
};

export default isAuth;
