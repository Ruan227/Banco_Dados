
USE gastos_deputados;

	CREATE TABLE gastos_deputados (
	  id INT NOT NULL AUTO_INCREMENT,
	  deputado_id INT,
	  nome VARCHAR(255),
	  partido VARCHAR(255),
	  uf VARCHAR(255),
	  tipo_despesa VARCHAR(255),
	  fornecedor VARCHAR(255),
	  data_emissao DATE,
	  valor DECIMAL(15, 2),
	  url_documento VARCHAR(255),
	  PRIMARY KEY (id)
	);