import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2 className="text-primary">Questions & Answer</h2>
      <div className="p-2">
        <h3 className="text-info">
          1.Difference between javascript and nodejs
        </h3>
        <p>
          javascript:
          <br />
          1)Javascript is a lightweight,object-oriented scripting language.
          <br />
          2)It is used to build dynamic HTML pages with interactive effects on a
          webpage,Mobile Applications,Games,Server Applications etc.
        </p>
        <p>
          nodejs:
          <br />
          1)Node.js is not a language.It is a cross-platform,open-source,server
          side runtime environment.
          <br />
          2)nodejs can run on various platforms windows,Linux,Mac OS,etc.
        </p>
      </div>
      <div className="p-2">
        <h3 className="text-info">
          2. When should you use nodejs and when should you use mongodb
        </h3>
        <p>
          When use nodejs:
          <br />
          1)nodejs includes a debugging utility that can be accessed by a
          built-in debugging client.
          <br />
          2)nodejs is built upon the concept of single-threaded programming.
        </p>
        <p>
          When use Mongodb:
          <br />
          1)Mongodb is well-suited for real-time analytics,content
          management,the internet of things,mobile,and other types of
          applications.
          <br />
          2)An ideal choice if we have unstructured and structured data with the
          potential for rapid growth
          <br />
        </p>
      </div>
      <div className="p-2">
        <h3 className="text-info">
          3.Differences between sql and nosql databases.
        </h3>
        <p>
          SQL:
          <br />
          1)SQL databases are table based databases.
          <br />
          2)SQL databases are vertically scalable.
          <br />
          3)SQL databases comes into play for complex query intensive
          environment.
        </p>
        <p>
          NoSQL:
          <br />
          1) NoSQL databases can be document based,key-value pairs,graph
          databases.
          <br />
          2)NoSQL databases are horizontally scalable.
          <br />
          3)NoSQL databases comes into play where queries are not complex.
        </p>
      </div>
      <div className="p-2">
        <h3 className="text-info">
          4. What is the purpose of jwt and how does{" "}
        </h3>
        <p>
          Purpose of jwt: Without jwt we can access the protected route.JWT is
          mainly used for authorization purpose,not authentication.
          <p>
            JWT works:
            <br />
            Client login with username and password.Server creates a token for
            the client.Server sends a token to the client.Client stores the
            token on either local storage or browser cookie.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
