Here is my practice LOTR project.

I'm really hoping that this will turn out.

LOTR API Link: https://the-one-api.herokuapp.com/v1/

LOTR API Auth:
Authorization: Bearer your-api-key-123

LOTR API Endpoints: 
NO AUTHENTICATION REQUIRED
/book
/book/{id}
/book/{id}/chapter
AUTHENTICATION REQUIRED
/movie
/movie/{id}
/movie/{id}/quote
/character
/character/{id}
/character/{id}/quote
/quote
/quote/{id}
/chapter
/chapter/{id}

LOTR API Token: 31rkX6UJLAHpQUT3cUZa

I don't know how to use Auth with axios.  I looked up some stuff online and found the following in stackOverflow:
const header = `Authorization: Bearer ${token}`;
return axios.get(URLConstants.USER_URL, { headers: { header } });