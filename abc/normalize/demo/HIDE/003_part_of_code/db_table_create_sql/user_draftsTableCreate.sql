  
  CREATE TABLE IF NOT EXISTS user_drafts (
      user_drafts_id INTEGER NOT NULL PRIMARY KEY  AUTOINCREMENT ,
      user_drafts_user_id INTEGER NOT NULL,
      user_drafts_title TEXT,
      user_drafts_content TEXT,
      user_drafts_update_time DATETIME DEFAULT CURRENT_TIMESTAMP
      
  );