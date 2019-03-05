package com.ipartek.formacion.service.impl;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.ipartek.formacion.modelo.daos.AgenteDAO;
import com.ipartek.formacion.modelo.daos.CocheDAO;
import com.ipartek.formacion.modelo.daos.MultaDAO;
import com.ipartek.formacion.modelo.daos.MultaDAO2;
import com.ipartek.formacion.modelo.pojo.Agente;
import com.ipartek.formacion.modelo.pojo.Coche;
import com.ipartek.formacion.modelo.pojo.Multa;
import com.ipartek.formacion.modelo.pojo.MultaNueva;
import com.ipartek.formacion.service.AgenteService;

public class AgenteServiceImpl implements AgenteService {

	private static AgenteDAO agenteDAO ;
	private static MultaDAO2 multaDAO;
	private static CocheDAO cocheDAO;
	
	private static AgenteServiceImpl INSTANCE = null;
	
	private AgenteServiceImpl() {
		super();	
		agenteDAO = AgenteDAO.getInstance();
		multaDAO = MultaDAO2.getInstance();
		cocheDAO = CocheDAO.getInstance();
	}

	public static synchronized AgenteServiceImpl getInstance() {
        if (INSTANCE == null) {
        	INSTANCE = new AgenteServiceImpl();
        } 
        return INSTANCE;
    }
	
	
	


	public Agente existe(int numeroPlaca, String pass) {
		
		//el agente esta hardcodeado, pendiente llamar al dao para obtenerlo
//		if ( "admin".equals(password) && "admin".equals(numeroPlaca)) {
//			agente = new Agente(1l, "Takelberry", "12345678", "");
//		}
			
		Agente agente = agenteDAO.getByPlacaPassword(numeroPlaca, pass);		
		return agente;
	}

//	@Override
//	public Multa multar(int idCoche, int idAgente, String concepto, float importe) throws Exception {
//		
//		Multa multa = multaDAO.insert(idCoche, idAgente, concepto, importe);
//		return multa;
//	}
	
	@Override
	public boolean insertar(MultaNueva multa) {
		boolean resultado = false;
		try {
			resultado = multaDAO.insert(multa);
		} catch (SQLException e) {
			return false;
		}
		return resultado;
	
	}

	@Override
	public List<Multa> obtenerMultas(int idAgente) {
		ArrayList<Multa> multas = multaDAO.getById(idAgente);
		return multas;
	}
	
	@Override
	public Coche buscarMatricula(String matricula) {
		
		return cocheDAO.getByMatricula(matricula);
	}
	
	


}