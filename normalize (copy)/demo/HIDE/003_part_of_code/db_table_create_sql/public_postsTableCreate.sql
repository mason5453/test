  
  CREATE TABLE IF NOT EXISTS public_posts (
      public_posts_id INTEGER NOT NULL PRIMARY KEY  AUTOINCREMENT ,
      public_posts_title TEXT NOT NULL,
      public_posts_content TEXT NOT NULL,
      public_posts_author_nickname TEXT,
      public_posts_view_count INTEGER,
      public_posts_create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
      public_posts_update_time DATETIME DEFAULT CURRENT_TIMESTAMP
      
  );