DROP TABLE IF EXISTS `todos`;
CREATE TABLE `todos` (
  `id` bigint(20) AUTO_INCREMENT PRIMARY KEY,
  `gmt_create` timestamp NULL,
  `gmt_modified` timestamp NULL,
  `gmt_deleted` timestamp NULL,
  `title` varchar(1000) NOT NULL,
  `completed` tinyint DEFAULT 0
);

-- { id: '1', title: 'Read history of Node.js', completed: true },
-- { id: '2', title: 'Learn Koa', completed: true },
-- { id: '3', title: 'Star Egg', completed: false },
-- INSERT INTO `todos` (`id`, `title`, `completed`, `gmt_create`, `gmt_modified`, `gmt_deleted`)
--   VALUES(1, 'Read history of Node.js', 1, NOW(), NOW(), NOW());
-- INSERT INTO `todos` (`id`, `title`, `completed`, `gmt_create`, `gmt_modified`, `gmt_deleted`)
--   VALUES(2, 'Learn Koa', 1, NOW(), NOW(), NOW());
-- INSERT INTO `todos` (`id`, `title`, `completed`, `gmt_create`, `gmt_modified`, `gmt_deleted`)
--   VALUES(3, 'Star Egg', 0, NOW(), NOW(), NOW());
INSERT INTO `todos` (`id`, `title`, `completed`, `gmt_create`, `gmt_modified`)
  VALUES(1, 'Read history of Node.js', 1, strftime('%s','now'), strftime('%s','now'));
INSERT INTO `todos` (`id`, `title`, `completed`, `gmt_create`, `gmt_modified`)
  VALUES(2, 'Learn Koa', 1, strftime('%s','now'),strftime('%s','now'));
INSERT INTO `todos` (`id`, `title`, `completed`, `gmt_create`, `gmt_modified`)
  VALUES(3, 'Star Egg', 0, strftime('%s','now'), strftime('%s','now'));
