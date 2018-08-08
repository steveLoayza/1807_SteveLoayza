package com.revature.ers.dao;
import java.sql.*;

import oracle.jdbc.OracleDriver;

public class ConnectionUtil {
	
	public static Connection getConnection() throws SQLException{
		String url="jdbc:oracle:thin:@loayzadb.ccmfi5ej1c2m.us-east-1.rds.amazonaws.com:1521:ORCL";
		String username= "steve";
		String password= "loayza123";
		OracleDriver driver = new OracleDriver();
        DriverManager.registerDriver(driver);
        return DriverManager.getConnection(url,username,password);
	}		
	/*
	public static Connection getConnection() throws IOException,SQLException{
		Properties prop = new Properties();
		InputStream in = new FileInputStream("connection.properties");
		prop.load(in);
		in.close();
		String url = prop.getProperty("url");
		String username = prop.getProperty("username");
		String password = prop.getProperty("password");
		return DriverManager.getConnection(url,username,password);
	}*/
}
