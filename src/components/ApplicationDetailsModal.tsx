import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Calendar, User, Building, CreditCard, MapPin, Phone, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ApplicationDetailsModalProps {
  applicationId: string;
  isOpen: boolean;
  onClose: () => void;
}

interface Application {
  id: string;
  application_id: string;
  bank_name: string;
  borrower_name: string;
  application_type: string;
  loan_type: string;
  loan_amount: number;
  submission_date: string;
  status: string;
  customer_id: string;
  phone: string;
  email: string;
  address: string;
  sanction_date?: string;
  uploaded_files: any;
  opinion_files: any;
  assigned_to_username?: string;
  assigned_at?: string;
  digital_signature_applied: boolean;
}

export const ApplicationDetailsModal = ({ applicationId, isOpen, onClose }: ApplicationDetailsModalProps) => {
  const [application, setApplication] = useState<Application | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && applicationId) {
      fetchApplicationDetails();
    }
  }, [isOpen, applicationId]);

  const fetchApplicationDetails = async () => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .eq('application_id', applicationId)
        .single();

      if (error) {
        console.error('Error fetching application details:', error);
        toast({
          title: "Error",
          description: "Failed to fetch application details",
          variant: "destructive",
        });
        return;
      }

      setApplication(data);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const downloadFile = async (fileUrl: string, fileName: string) => {
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error('Download failed');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast({
        title: "Success",
        description: `${fileName} downloaded successfully`,
      });
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Error",
        description: "Failed to download file",
        variant: "destructive",
      });
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status.toLowerCase()) {
      case "submitted":
        return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Submitted</Badge>;
      case "in_review":
        return <Badge className="bg-amber-100 text-amber-800 border-amber-200">In Review</Badge>;
      case "draft":
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">Draft</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  if (!application && !loading) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-bank-navy" />
            <span>Application Details - {applicationId}</span>
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(90vh-120px)]">
          {loading ? (
            <div className="flex justify-center py-8">
              <p>Loading application details...</p>
            </div>
          ) : application ? (
            <div className="space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-bank-navy" />
                    <span>Application Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Application ID</label>
                    <p className="font-semibold">{application.application_id}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Application Type</label>
                    <p className="font-semibold">{application.application_type}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Bank Name</label>
                    <p className="font-semibold">{application.bank_name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Status</label>
                    <div className="mt-1">{getStatusBadge(application.status)}</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Submission Date</label>
                    <p className="font-semibold">{new Date(application.submission_date).toLocaleDateString()}</p>
                  </div>
                  {application.assigned_to_username && (
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Assigned To</label>
                      <p className="font-semibold">{application.assigned_to_username}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Borrower Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-bank-navy" />
                    <span>Borrower Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Borrower Name</label>
                    <p className="font-semibold">{application.borrower_name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Customer ID</label>
                    <p className="font-semibold">{application.customer_id}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Phone</label>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <p className="font-semibold">{application.phone}</p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Email</label>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <p className="font-semibold">{application.email}</p>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label className="text-sm font-medium text-muted-foreground">Address</label>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <p className="font-semibold">{application.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Loan Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5 text-bank-navy" />
                    <span>Loan Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Loan Type</label>
                    <p className="font-semibold">{application.loan_type}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Loan Amount</label>
                    <p className="font-semibold text-emerald-600">₹{Number(application.loan_amount).toLocaleString()}</p>
                  </div>
                  {application.sanction_date && (
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Sanction Date</label>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <p className="font-semibold">{new Date(application.sanction_date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  )}
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Digital Signature Applied</label>
                    <p className="font-semibold">{application.digital_signature_applied ? "Yes" : "No"}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Uploaded Documents */}
              {application.uploaded_files && Array.isArray(application.uploaded_files) && application.uploaded_files.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-bank-navy" />
                      <span>Uploaded Documents</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {application.uploaded_files.map((file: any, index: number) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{file.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {file.type} • {(file.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => downloadFile(file.url, file.name)}
                          >
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Opinion Documents */}
              {application.opinion_files && Array.isArray(application.opinion_files) && application.opinion_files.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-emerald-600" />
                      <span>Legal Opinion Documents</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {application.opinion_files.map((file: any, index: number) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg bg-emerald-50">
                          <div className="flex items-center space-x-3">
                            <FileText className="h-5 w-5 text-emerald-600" />
                            <div>
                              <p className="font-medium">{file.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {file.type} • {(file.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                              {file.signed && (
                                <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 mt-1">
                                  Digitally Signed
                                </Badge>
                              )}
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => downloadFile(file.url, file.name)}
                          >
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <p>Application not found</p>
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};