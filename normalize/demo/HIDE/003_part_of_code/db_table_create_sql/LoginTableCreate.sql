  
  CREATE TABLE IF NOT EXISTS Login (
      LoginToken TEXT PRIMARY KEY ,
      UserId INTEGER NOT NULL,
      TokenExpireTime TEXT,
      LastLoginTime TEXT
      
  );