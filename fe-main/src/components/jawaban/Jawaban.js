import React, { useState, useEffect } from "react";
import axios from "axios";
import { Breadcrumb, Card, Table } from "react-bootstrap";
import AdminLayout from "../layouts/AdminLayout";

const HasilJawaban = () => {
  const [hasilJawaban, setHasilJawaban] = useState([]);

  useEffect(() => {
    getHasilJawaban();
  }, []);

  const getHasilJawaban = async () => {
    try {
      // Mendapatkan hasil jawaban dari backend
      const response = await axios.get("http://localhost:8080/api/jawaban");
      setHasilJawaban(response.data);
    } catch (error) {
      console.error("Error fetching hasil jawaban data:", error);
    }
  };

  return (
    <AdminLayout>
      <div>
        <Breadcrumb className="mt-3">
          <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Hasil Jawaban</Breadcrumb.Item>
        </Breadcrumb>

        <Card>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="font-weight-bold" style={{ fontSize: "20px" }}>
                Hasil Jawaban Partisipan
              </h5>
            </div>
            <div className="table-responsive" style={{ overflowY: "auto", maxHeight: "450px" }}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nama Partisipan</th>
                    <th>Pertanyaan</th>
                    <th>Jawaban</th>
                  </tr>
                </thead>
                <tbody>
                  {hasilJawaban.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.nama_partisipan}</td>
                      <td>{item.pertanyaan}</td>
                      <td>{item.jawaban}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default HasilJawaban;
