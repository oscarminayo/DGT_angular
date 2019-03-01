package com.ipartek.formacion.modelo.daos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.ipartek.formacion.modelo.cm.ConnectionManager;
import com.ipartek.formacion.modelo.pojo.Agente;
import com.ipartek.formacion.modelo.pojo.Coche;
import com.ipartek.formacion.modelo.pojo.Multa;


public class MultaDAO2 {
	
private static MultaDAO2 INSTANCE = null;
	
	
	private static final String SQL_GETBYID = "SELECT \r\n" + 
			"	m.id,\r\n" + 
			"    m.importe,\r\n" + 
			"    m.concepto,\r\n" + 
			"    m.fecha_alta,\r\n" + 
			"    c.id as 'id_coche',\r\n" + 
			"    c.modelo as 'modelo_coche',\r\n" + 
			"    a.id as 'id_agente',\r\n" + 
			"    a.nombre as 'nombre_agente',\r\n" + 
			"    m.fecha_mod,\r\n" + 
			"    m.fecha_baja\r\n" + 
			"FROM multa as m,coche as c, agente as a\r\n" + 
			"WHERE m.id_agente = a.id AND m.id_coche = c.id AND a.id = ?;";;
	
	//constructor privado, solo acceso por getInstance()
		private MultaDAO2() {
			super();
		}
		
		public synchronized static MultaDAO2 getInstance() {

			if (INSTANCE == null) {
				INSTANCE = new MultaDAO2();
			}
			return INSTANCE;
		}
	
	
	public ArrayList<Multa> getById(int idAgente){
		ArrayList<Multa> multas = new ArrayList<Multa>();
		
		try (Connection conn = ConnectionManager.getConnection();
				PreparedStatement pst = conn.prepareStatement(SQL_GETBYID)){
			
			pst.setInt(1, idAgente);
			
			try(ResultSet rs = pst.executeQuery()){
				while(rs.next()) {
					multas.add(rowMapper(rs));
				}
			}
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
		return multas;
	}
	
	private Multa rowMapper(ResultSet rs) throws SQLException {
		
		Coche coche = new Coche();
		coche.setId(rs.getInt("id_coche"));
		coche.setModelo(rs.getString("modelo_coche"));
		
		Agente agente = new Agente();
		agente.setId(rs.getInt("id_agente"));
		agente.setNombre(rs.getString("nombre_agente"));
		
		Multa multa = new Multa();
		multa.setId(rs.getInt("id"));
		multa.setImporte(rs.getDouble("importe"));
		multa.setConcepto(rs.getString("concepto"));
		multa.setFechaAlta(rs.getDate("fecha_alta"));
		multa.setCoche(coche);
		multa.setAgente(agente);
		multa.setFechaModificacion(rs.getDate("fecha_mod"));
		multa.setFechaBaja(rs.getDate("fecha_baja"));
		
		return multa;
	}
}