-- MySQL dump 10.13  Distrib 5.7.12, for osx10.9 (x86_64)
--
-- Host: 127.0.0.1    Database: db_salao
-- ------------------------------------------------------
-- Server version	5.6.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agenda`
--

DROP TABLE IF EXISTS `agenda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `agenda` (
  `idagenda` int(11) NOT NULL AUTO_INCREMENT,
  `idcliente` int(11) NOT NULL,
  `idservico` int(11) NOT NULL,
  `data` datetime DEFAULT NULL,
  `observacao` varchar(200) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idagenda`),
  KEY `fk_agenda_cliente1_idx` (`idcliente`),
  KEY `fk_agenda_servico1_idx` (`idservico`),
  CONSTRAINT `fk_agenda_cliente1` FOREIGN KEY (`idcliente`) REFERENCES `cliente` (`idcliente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_agenda_servico1` FOREIGN KEY (`idservico`) REFERENCES `servico` (`idservico`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agenda`
--

LOCK TABLES `agenda` WRITE;
/*!40000 ALTER TABLE `agenda` DISABLE KEYS */;
INSERT INTO `agenda` VALUES (1,1,2,'2016-09-09 21:00:00','12','Agendado');
/*!40000 ALTER TABLE `agenda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria` (
  `idcategoria` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  PRIMARY KEY (`idcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Maquiagem'),(2,'Cabelo'),(3,'Barba');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `idcliente` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `sexo` char(1) DEFAULT NULL,
  `data_nascimento` date DEFAULT NULL,
  `cpf_cnpj` varchar(30) DEFAULT NULL,
  `rg` varchar(30) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `endereco` varchar(100) DEFAULT NULL,
  `bairro` varchar(80) DEFAULT NULL,
  `cidade` varchar(80) DEFAULT NULL,
  `estado` varchar(2) DEFAULT NULL,
  `numero` varchar(10) DEFAULT NULL,
  `complemento` varchar(80) DEFAULT NULL,
  `observacao` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`idcliente`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,'Vinicius Vense','M','2016-08-31','000.000.000-00','15.123','(34)0000-0000','adf','fasd','123','ads','mg','234',NULL,'fasd'),(2,'Suaurio','M','2017-07-10','1058228423412','fasdf','(34)3226-3211','vense04@gmail.com','TEste','Morumbi','TEste','MG','1234',NULL,'Teste'),(3,'fasd','M','2016-11-10','41232314','41324','41234123','4123@gmail.com','fasdf','Morumbi','Udia','mg','1234',NULL,'asdf'),(4,'fsadf','M','2016-12-20','fasd','sadf','fasd','fasd','fsad','fasd','fasdf','ff','fsd',NULL,'fasd');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compra`
--

DROP TABLE IF EXISTS `compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compra` (
  `idcompra` int(11) NOT NULL AUTO_INCREMENT,
  `idfornecedor` int(11) DEFAULT NULL,
  `data_compra` datetime DEFAULT NULL,
  `valor_total` decimal(5,2) DEFAULT NULL,
  `valor_frete` decimal(5,2) DEFAULT NULL,
  `valor_desconto` decimal(5,2) DEFAULT NULL,
  `valor_final` decimal(5,2) DEFAULT NULL,
  `forma_pagamento` varchar(50) DEFAULT NULL,
  `observacao` varchar(200) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idcompra`),
  KEY `fk_compra_fornecedor1_idx` (`idfornecedor`),
  CONSTRAINT `fk_compra_fornecedor1` FOREIGN KEY (`idfornecedor`) REFERENCES `fornecedor` (`idfornecedor`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compra`
--

LOCK TABLES `compra` WRITE;
/*!40000 ALTER TABLE `compra` DISABLE KEYS */;
/*!40000 ALTER TABLE `compra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compra_itens`
--

DROP TABLE IF EXISTS `compra_itens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compra_itens` (
  `idcompraitens` int(11) NOT NULL AUTO_INCREMENT,
  `idcompra` int(11) DEFAULT NULL,
  `idproduto` int(11) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `valor` decimal(5,2) DEFAULT NULL,
  `desconto` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`idcompraitens`),
  KEY `fk_compra_itens_produto1_idx` (`idproduto`),
  KEY `fk_compra_itens_compra1_idx` (`idcompra`),
  CONSTRAINT `fk_compra_itens_compra1` FOREIGN KEY (`idcompra`) REFERENCES `compra` (`idcompra`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_compra_itens_produto1` FOREIGN KEY (`idproduto`) REFERENCES `produto` (`idproduto`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compra_itens`
--

LOCK TABLES `compra_itens` WRITE;
/*!40000 ALTER TABLE `compra_itens` DISABLE KEYS */;
/*!40000 ALTER TABLE `compra_itens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contas_pagar`
--

DROP TABLE IF EXISTS `contas_pagar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contas_pagar` (
  `idcontaspagar` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `descricao` varchar(200) DEFAULT NULL,
  `idfornecedor` int(11) DEFAULT NULL,
  `data_conta` datetime DEFAULT NULL,
  `data_vencimento` date DEFAULT NULL,
  `data_pagamento` date DEFAULT NULL,
  `valor_conta` decimal(5,2) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idcontaspagar`),
  KEY `fk_contas_pagar_fornecedor1_idx` (`idfornecedor`),
  CONSTRAINT `fk_contas_pagar_fornecedor1` FOREIGN KEY (`idfornecedor`) REFERENCES `fornecedor` (`idfornecedor`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contas_pagar`
--

LOCK TABLES `contas_pagar` WRITE;
/*!40000 ALTER TABLE `contas_pagar` DISABLE KEYS */;
INSERT INTO `contas_pagar` VALUES (1,'fasd','asdf',1,'2016-12-04 22:00:00','2016-12-20','2016-12-26',234.00,'Debito'),(2,'fasd','a',1,'2016-12-25 22:00:00','2016-12-22','2016-12-18',123.00,'Paga'),(3,'fasd','teste',1,'2016-12-05 22:00:00','2016-12-23','2016-12-20',100.00,'Debito'),(4,'Vinicius','Teste',2,'2016-12-12 22:00:00','2016-12-14','2016-12-20',234.00,'Paga');
/*!40000 ALTER TABLE `contas_pagar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contas_receber`
--

DROP TABLE IF EXISTS `contas_receber`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contas_receber` (
  `idcontasreceber` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `descricao` varchar(200) DEFAULT NULL,
  `idcliente` int(11) DEFAULT NULL,
  `data_conta` datetime DEFAULT NULL,
  `data_vencimento` date DEFAULT NULL,
  `data_recebimento` date DEFAULT NULL,
  `valor_conta` decimal(5,2) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idcontasreceber`),
  KEY `fk_contas_receber_cliente1_idx` (`idcliente`),
  CONSTRAINT `fk_contas_receber_cliente1` FOREIGN KEY (`idcliente`) REFERENCES `cliente` (`idcliente`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contas_receber`
--

LOCK TABLES `contas_receber` WRITE;
/*!40000 ALTER TABLE `contas_receber` DISABLE KEYS */;
INSERT INTO `contas_receber` VALUES (1,'sdfg','gsd',4,'2016-12-08 22:00:00','2016-12-15','2016-12-04',234.00,'Debito');
/*!40000 ALTER TABLE `contas_receber` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fornecedor`
--

DROP TABLE IF EXISTS `fornecedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fornecedor` (
  `idfornecedor` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `razao_social` varchar(100) DEFAULT NULL,
  `cpf_cnpj` varchar(30) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `site` varchar(100) DEFAULT NULL,
  `endereco` varchar(100) DEFAULT NULL,
  `bairro` varchar(80) DEFAULT NULL,
  `cidade` varchar(80) DEFAULT NULL,
  `estado` varchar(2) DEFAULT NULL,
  `numero` varchar(10) DEFAULT NULL,
  `complemento` varchar(80) DEFAULT NULL,
  `observacao` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`idfornecedor`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fornecedor`
--

LOCK TABLES `fornecedor` WRITE;
/*!40000 ALTER TABLE `fornecedor` DISABLE KEYS */;
INSERT INTO `fornecedor` VALUES (1,'gfdsg','gdf','345234','5234','52345','5234','5234','523','523','53','5234',NULL,'Teste'),(2,'fasd','fasd','fasd','fasd','fasd','fasd','fasdf','fd','asd','as','12',NULL,'fasf');
/*!40000 ALTER TABLE `fornecedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produto` (
  `idproduto` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `descricao` varchar(200) DEFAULT NULL,
  `categoria` int(11) DEFAULT NULL,
  `quantidade_estoque` int(11) DEFAULT NULL,
  `valor_compra_medio` decimal(5,2) DEFAULT NULL,
  `valor_venda` decimal(5,2) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idproduto`),
  KEY `fk_produto_categoria1_idx` (`categoria`),
  CONSTRAINT `fk_produto_categoria1` FOREIGN KEY (`categoria`) REFERENCES `categoria` (`idcategoria`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (1,'fasd','asdf',2,123,12.00,123.00,'Ativo');
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servico`
--

DROP TABLE IF EXISTS `servico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `servico` (
  `idservico` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `descricao` varchar(200) DEFAULT NULL,
  `duracao` int(11) DEFAULT NULL,
  `valor` decimal(5,2) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idservico`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servico`
--

LOCK TABLES `servico` WRITE;
/*!40000 ALTER TABLE `servico` DISABLE KEYS */;
INSERT INTO `servico` VALUES (1,'Corte Cabelo','Teste',10,10.00,'Ativo'),(2,'fasd','fads',1,10.00,'Ativo');
/*!40000 ALTER TABLE `servico` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-12-10 15:40:44
