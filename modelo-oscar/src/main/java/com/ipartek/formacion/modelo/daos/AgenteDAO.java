package com.ipartek.formacion.modelo.daos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.apache.log4j.Logger;

import com.ipartek.formacion.modelo.cm.ConnectionManager;
import com.ipartek.formacion.modelo.pojo.Agente;


public class AgenteDAO {
	private final static Logger LOG = Logger.getLogger(ConnectionManager.class);
	private static AgenteDAO INSTANCE = null;
	
	private static final String SQL_GETALL = "SELECT * FROM agente ORDER BY id DESC LIMIT 100;";
	private static final String SQL_GETBYPLACAYPASSWORD = "SELECT * FROM agente WHERE placa=? and password=?;";
	
	//constructor privado, solo acceso por getInstance()
	private AgenteDAO() {
		super();
	}
	
	public synchronized static AgenteDAO getInstance() {

		if (INSTANCE == null) {
			INSTANCE = new AgenteDAO();
		}
		return INSTANCE;
	}
	
	
	public ArrayList<Agente> getAll(){
		ArrayList<Agente> agentes = new ArrayList<Agente>();
		
		try (Connection conn = ConnectionManager.getConnection();
				PreparedStatement pst = conn.prepareStatement(SQL_GETALL);
				ResultSet rs = pst.executeQuery()) {
			
			while (rs.next()) {
				agentes.add(rowMapper(rs));
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			LOG.info(e);
			
		}
		
		
		return agentes;
	}
	
	public Agente getByPlacaPassword(int placa, String pass){
		Agente agente = null;
		
		try (Connection conn = ConnectionManager.getConnection();
				PreparedStatement pst = conn.prepareStatement(SQL_GETBYPLACAYPASSWORD)){
			
			pst.setInt(1, placa);
			pst.setString(2, pass);
			
			try(ResultSet rs = pst.executeQuery()){
				while(rs.next()) {
					agente = rowMapper(rs);
				}
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			LOG.info(e);
		}
		
		return agente;
	}
	
	
	private Agente rowMapper(ResultSet rs) throws SQLException {
		Agente agente = new Agente();
		agente.setId(rs.getInt("id"));
		agente.setNombre(rs.getString("nombre"));
		agente.setPlaca(rs.getString("placa"));
		agente.setPassword(rs.getString("password"));
		
		return agente;
	}
	
	
	
	
}
