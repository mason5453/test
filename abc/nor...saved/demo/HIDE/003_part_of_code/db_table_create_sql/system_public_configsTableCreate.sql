  
  CREATE TABLE IF NOT EXISTS system_public_configs (
      system_public_configs_id INTEGER NOT NULL PRIMARY KEY  AUTOINCREMENT ,
      system_public_configs_config_key TEXT NOT NULL,
      system_public_configs_config_value TEXT NOT NULL,
      system_public_configs_is_public INTEGER NOT NULL DEFAULT "true",
      system_public_configs_update_time DATETIME DEFAULT CURRENT_TIMESTAMP
      
  );