package com.ipartek.formacion.dgt.api;

import java.util.List;
import java.util.ArrayList;

import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ipartek.formacion.modelo.pojo.Agente;
import com.ipartek.formacion.modelo.pojo.Multa;
import com.ipartek.formacion.modelo.pojo.MultaNueva;
import com.ipartek.formacion.service.AgenteService;
import com.ipartek.formacion.service.impl.AgenteServiceImpl;

@CrossOrigin
@RestController
public class MultaController {
	private final static Logger LOG = Logger.getLogger(AgenteController.class);
	private AgenteService agenteService;
	private ValidatorFactory factory;
	private Validator validator;
	
	public MultaController() {
		super();
		agenteService = AgenteServiceImpl.getInstance();
		factory  = Validation.buildDefaultValidatorFactory();
    	validator  = factory.getValidator();
	}
	
	//las variables de la uri y los PathVariable han de llamarse igual.
		@RequestMapping( value= {"/api/agente/{idAgente}/multas"}, method = RequestMethod.GET)
		public ResponseEntity<List<Multa>> obtenerMultas( 
											@PathVariable int idAgente){		
			
			//por defecto tenemos codigo 403
			ResponseEntity<List<Multa>> response = new ResponseEntity<List<Multa>>(HttpStatus.FORBIDDEN);
			try {
				
				//si existe la lista de multas(diferente de null), tendremos un codigo 200
				List<Multa> multas = agenteService.obtenerMultas(idAgente);
				if ( multas !=null ) {
					response = new ResponseEntity<List<Multa>>(multas, HttpStatus.OK);
				}		
				
			//si ocurre alguna excepcion tendremos codigo 500
			}catch (Exception e) {
				e.printStackTrace();
				LOG.error(e);
				response = new ResponseEntity<List<Multa>>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
			
			return response;
			
		}
		
		@RequestMapping(value = { "/api/multa/" }, method = RequestMethod.POST)
		public ResponseEntity<MultaNueva> multar(@RequestBody MultaNueva multa) {

			ResponseEntity<MultaNueva> response = new ResponseEntity<MultaNueva>(HttpStatus.INTERNAL_SERVER_ERROR);
			
			boolean insertado = false;
			
			try {
				insertado = agenteService.insertar(multa);
				if (insertado == true) {
					response = new ResponseEntity<MultaNueva>(multa, HttpStatus.CREATED);
				}
			} catch (Exception e) {
				response = new ResponseEntity<MultaNueva>(HttpStatus.BAD_REQUEST);
			}

			return response;

		}
	
	
	
}
