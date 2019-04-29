/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2019/4/29 14:11:27                           */
/*==============================================================*/


DROP TABLE IF EXISTS AUTH_APPLICATION;

DROP TABLE IF EXISTS AUTH_AUTHORITY;

DROP TABLE IF EXISTS AUTH_AUTHORITY_ACTION;

DROP TABLE IF EXISTS AUTH_GROUP;

DROP TABLE IF EXISTS AUTH_GROUP_AUTHORITY;

DROP TABLE IF EXISTS AUTH_LOG;

DROP TABLE IF EXISTS AUTH_MENU;

DROP TABLE IF EXISTS AUTH_ROLE;

DROP TABLE IF EXISTS AUTH_ROLE_AUTHORITY;

DROP TABLE IF EXISTS AUTH_USER;

DROP TABLE IF EXISTS AUTH_USER_ROLE;

DROP TABLE IF EXISTS COM_ACTION;

DROP TABLE IF EXISTS COM_AUTOID;

DROP TABLE IF EXISTS COM_DICT;

DROP TABLE IF EXISTS COM_DICT_TYPE;

DROP TABLE IF EXISTS COM_LOG;

/*==============================================================*/
/* Table: AUTH_APPLICATION                                      */
/*==============================================================*/
CREATE TABLE AUTH_APPLICATION
(
   ID                   INT NOT NULL  COMMENT '',
   NAME                 VARCHAR(100) NOT NULL  COMMENT '',
   COMPANY_NAME         VARCHAR(200)  COMMENT '',
   DATA_VERSION         INT  COMMENT '',
   PRIMARY KEY (ID)
);

/*==============================================================*/
/* Table: AUTH_AUTHORITY                                        */
/*==============================================================*/
CREATE TABLE AUTH_AUTHORITY
(
   ID                   INT NOT NULL  COMMENT '',
   NAME                 VARCHAR(100) NOT NULL  COMMENT '',
   "DESC"               VARCHAR(200)  COMMENT '',
   TYPE                 INT NOT NULL  COMMENT '',
   PARENT_ID            INT  COMMENT '',
   DATA_VERSION         INT NOT NULL  COMMENT '',
   URL                  VARCHAR(150)  COMMENT '',
   APPLICATION_ID       INT  COMMENT '',
   PRIMARY KEY (ID)
);

/*==============================================================*/
/* Table: AUTH_AUTHORITY_ACTION                                 */
/*==============================================================*/
CREATE TABLE AUTH_AUTHORITY_ACTION
(
   ID                   INT NOT NULL  COMMENT '',
   AUTHORITY_ID         INT NOT NULL  COMMENT '',
   ACTION_ID            VARCHAR(10) NOT NULL  COMMENT '',
   DATA_VERSION         INT NOT NULL  COMMENT '',
   PRIMARY KEY (ID)
);

/*==============================================================*/
/* Table: AUTH_GROUP                                            */
/*==============================================================*/
CREATE TABLE AUTH_GROUP
(
   ID                   VARCHAR(10) NOT NULL  COMMENT '',
   NAME                 VARCHAR(100) NOT NULL  COMMENT '',
   "DESC"               VARCHAR(200)  COMMENT '',
   DATA_VERSION         INT NOT NULL  COMMENT '',
   PRIMARY KEY (ID)
);

/*==============================================================*/
/* Table: AUTH_GROUP_AUTHORITY                                  */
/*==============================================================*/
CREATE TABLE AUTH_GROUP_AUTHORITY
(
   ID                   INT NOT NULL  COMMENT '',
   GROUP_ID             VARCHAR(10) NOT NULL  COMMENT '',
   AUTHORITY_ID         INT NOT NULL  COMMENT '',
   DATA_VERSION         INT NOT NULL  COMMENT '',
   PRIMARY KEY (ID)
);

/*==============================================================*/
/* Table: AUTH_LOG                                              */
/*==============================================================*/
CREATE TABLE AUTH_LOG
(
   ID                   INT NOT NULL  COMMENT '',
   TABLE_NAME           VARCHAR(50) NOT NULL  COMMENT '',
   ACTION_ID            VARCHAR(10) NOT NULL  COMMENT '',
   CONTENT              VARCHAR(1000)  COMMENT '',
   RESULT               VARCHAR(500)  COMMENT '',
   OPERATE_TIME         DATETIME NOT NULL  COMMENT '',
   USER_ID              VARCHAR(64) NOT NULL  COMMENT '',
   PRIMARY KEY (ID)
);

/*==============================================================*/
/* Table: AUTH_MENU                                             */
/*==============================================================*/
CREATE TABLE AUTH_MENU
(
   ID                   INT NOT NULL  COMMENT '',
   NAME                 VARCHAR(64) NOT NULL  COMMENT '',
   LEVEL                INT NOT NULL  COMMENT '',
   ICON                 VARCHAR(100)  COMMENT '',
   "ORDER"              INT  COMMENT '',
   PARENT_ID            INT  COMMENT '',
   AUTHORITY_ID         INT  COMMENT '',
   DATA_VERSION         INT NOT NULL  COMMENT '',
   APPLICATION_ID       INT  COMMENT '',
   PRIMARY KEY (ID)
);

/*==============================================================*/
/* Table: AUTH_ROLE                                             */
/*==============================================================*/
CREATE TABLE AUTH_ROLE
(
   ID                   VARCHAR(10) NOT NULL  COMMENT '',
   NAME                 VARCHAR(30) NOT NULL  COMMENT '',
   "DESC"               VARCHAR(200)  COMMENT '',
   LEVEL                INT NOT NULL  COMMENT '',
   PARENT_ID            VARCHAR(10)  COMMENT '',
   DATA_VERSION         INT NOT NULL  COMMENT '',
   PRIMARY KEY (ID)
);

ALTER TABLE AUTH_ROLE COMMENT '角色表';

/*==============================================================*/
/* Table: AUTH_ROLE_AUTHORITY                                   */
/*==============================================================*/
CREATE TABLE AUTH_ROLE_AUTHORITY
(
   ID                   INT NOT NULL  COMMENT '',
   ROLE_ID              VARCHAR(10) NOT NULL  COMMENT '',
   AUTHORITY_ID         INT NOT NULL  COMMENT '',
   TYPE                 INT  COMMENT '',
   DATA_VERSION         INT NOT NULL  COMMENT '',
   PRIMARY KEY (ID)
);

/*==============================================================*/
/* Table: AUTH_USER                                             */
/*==============================================================*/
CREATE TABLE AUTH_USER
(
   ID                   VARCHAR(64) NOT NULL  COMMENT '',
   NAME                 VARCHAR(20) NOT NULL  COMMENT '',
   NICK_NAME            VARCHAR(50) NOT NULL  COMMENT '',
   PASSWORD             VARCHAR(50) NOT NULL  COMMENT '',
   SEX                  INT NOT NULL  COMMENT '',
   ADDRESS              VARCHAR(200)  COMMENT '',
   EMAIL                VARCHAR(50)  COMMENT '',
   PHONE                VARCHAR(15)  COMMENT '',
   DEPARTMENT_ID        VARCHAR(10)  COMMENT '',
   DATA_VERSION         INT NOT NULL  COMMENT '',
   PRIMARY KEY (ID)
);

/*==============================================================*/
/* Table: AUTH_USER_ROLE                                        */
/*==============================================================*/
CREATE TABLE AUTH_USER_ROLE
(
   ID                   INT NOT NULL  COMMENT '',
   USER_ID              VARCHAR(64) NOT NULL  COMMENT '',
   ROLE_ID              VARCHAR(10) NOT NULL  COMMENT '',
   DATA_VERSION         INT NOT NULL  COMMENT '',
   PRIMARY KEY (ID)
);

/*==============================================================*/
/* Table: COM_ACTION                                            */
/*==============================================================*/
CREATE TABLE COM_ACTION
(
   ID                   VARCHAR(10) NOT NULL  COMMENT '',
   NAME                 VARCHAR(50) NOT NULL  COMMENT '',
   VALUE                INT NOT NULL  COMMENT '',
   DATA_VERSION         INT NOT NULL  COMMENT '',
   PRIMARY KEY (ID)
);

/*==============================================================*/
/* Table: COM_AUTOID                                            */
/*==============================================================*/
CREATE TABLE COM_AUTOID
(
   ID                   INT  COMMENT '',
   MODEL_NAME           VARCHAR(30)  COMMENT '',
   PREFIX               VARCHAR(10)  COMMENT '',
   LENGTH               INT  COMMENT '',
   CURRENT              INT  COMMENT '',
   NEXT                 INT  COMMENT ''
);

/*==============================================================*/
/* Table: COM_DICT                                              */
/*==============================================================*/
CREATE TABLE COM_DICT
(
   ID                   VARCHAR(30) NOT NULL  COMMENT '',
   NAME                 VARCHAR(50) NOT NULL  COMMENT '',
   FULL_NAME            VARCHAR(100)  COMMENT '',
   "DESC"               VARCHAR(100)  COMMENT '',
   FLAG                 INT  COMMENT '',
   DATA_VERSION         INT NOT NULL  COMMENT '',
   PYCODE               VARCHAR(100)  COMMENT '',
   TYPE_ID              VARCHAR(20) NOT NULL  COMMENT '',
   PRIMARY KEY (ID)
);

/*==============================================================*/
/* Table: COM_DICT_TYPE                                         */
/*==============================================================*/
CREATE TABLE COM_DICT_TYPE
(
   ID                   VARCHAR(20) NOT NULL  COMMENT '',
   NAME                 VARCHAR(50) NOT NULL  COMMENT '',
   "DESC"               VARCHAR(100)  COMMENT '',
   FLAG                 INT  COMMENT '',
   PRIMARY KEY (ID)
);

/*==============================================================*/
/* Table: COM_LOG                                               */
/*==============================================================*/
CREATE TABLE COM_LOG
(
   ID                   INT NOT NULL  COMMENT '',
   TABLE_NAME           VARCHAR(50) NOT NULL  COMMENT '',
   ACTION_ID            VARCHAR(10) NOT NULL  COMMENT '',
   CONTENT              VARCHAR(1000)  COMMENT '',
   RESULT               VARCHAR(500)  COMMENT '',
   OPERATE_TIME         DATETIME NOT NULL  COMMENT '',
   USER_ID              VARCHAR(64) NOT NULL  COMMENT '',
   PRIMARY KEY (ID)
);

