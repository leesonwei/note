/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 8.0.15 : Database - note
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`note` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;

USE `note`;

/*Table structure for table `com_action` */

DROP TABLE IF EXISTS `com_action`;

CREATE TABLE `com_action` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `value` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `com_action` */

insert  into `com_action`(`id`,`name`,`value`) values (1,'INSERT',2),(2,'UPDATE',4);

/*Table structure for table `note_book` */

DROP TABLE IF EXISTS `note_book`;

CREATE TABLE `note_book` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '笔记本id',
  `name` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '笔记本名称',
  `data_version` int(11) DEFAULT '0' COMMENT '数据版本',
  `user_id` varchar(64) COLLATE utf8_bin DEFAULT NULL COMMENT '所属用户',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `note_book` */

/*Table structure for table `note_book_log` */

DROP TABLE IF EXISTS `note_book_log`;

CREATE TABLE `note_book_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_id` int(2) DEFAULT NULL,
  `user_id` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `content` varchar(2000) COLLATE utf8_bin DEFAULT NULL,
  `result` varchar(1000) COLLATE utf8_bin DEFAULT NULL,
  `create_time` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `note_book_log` */

/*Table structure for table `note_note` */

DROP TABLE IF EXISTS `note_note`;

CREATE TABLE `note_note` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) COLLATE utf8_bin NOT NULL,
  `user_id` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `content` blob,
  `data_version` int(11) DEFAULT '0',
  `book_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `note_note` */

/*Table structure for table `note_note_log` */

DROP TABLE IF EXISTS `note_note_log`;

CREATE TABLE `note_note_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_id` int(2) DEFAULT NULL,
  `user_id` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `content` varchar(2000) COLLATE utf8_bin DEFAULT NULL,
  `result` varchar(1000) COLLATE utf8_bin DEFAULT NULL,
  `create_time` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `note_note_log` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
