package com.revature.ers.main;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.*;

import javax.imageio.ImageIO;

import com.revature.ers.dao.*;
import com.revature.ers.model.*;

public class Main {

	public static void main(String[] args) throws IOException {
		DAO service = new DataService();
		User steve = service.getUser("steve");//tai
		User trae = service.verifyUser("trae","password");//jav
		User vince = service.getUser("vince");//me
		System.out.println(service.createUser("hello", "world", "firstname", "lastname", "email", UserRole.MANAGER));
		
		
		List<Request> traeReqs = service.getPendingRequests(trae.getId());
		List<Request> traeReqs2 = service.getResolvedRequests(trae.getId());

		
		System.out.println(vince);
		System.out.println(steve);
		System.out.println(trae);
		System.out.println(traeReqs);
		System.out.println(traeReqs2);
		System.out.println(service.getPendingRequests());
		System.out.println(service.getResolvedRequests());
		
		List<Request> steveReqs = service.getPendingRequests(steve.getId());
		System.out.println(steveReqs);
	
		//File file = new File("image.png");
        //FileOutputStream out = new FileOutputStream(file);
		//service.getReceipt(1, 64, out);
		//out.close();
	}

}
