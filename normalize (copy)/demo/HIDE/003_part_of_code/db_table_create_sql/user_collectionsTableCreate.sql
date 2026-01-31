  
  CREATE TABLE IF NOT EXISTS user_collections (
      user_collections_id INTEGER NOT NULL PRIMARY KEY  AUTOINCREMENT ,
      user_collections_user_id INTEGER NOT NULL,
      user_collections_post_id INTEGER NOT NULL,
      user_collections_collection_name TEXT,
      user_collections_update_time DATETIME DEFAULT CURRENT_TIMESTAMP
      
  );