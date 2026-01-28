import { Layout } from "@/components/layout";
import { SITE_CONTENT } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Check, QrCode, X } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";

export default function Donate() {
  const { toast } = useToast();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({
      title: "Copied to clipboard",
      description: `${field} has been copied to your clipboard.`,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <Layout>
      <div className="bg-orange-50/50 min-h-[calc(100vh-20rem)] py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Support Our Cause</h1>
            <p className="text-muted-foreground text-lg">{SITE_CONTENT.donation.message}</p>
          </div>

          <Card className="shadow-lg border-primary/10 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-orange-100">
                <img src="/assets/logo-real.jpeg" alt="Ananda Marga Logo" className="w-full h-full object-cover" />
              </div>
              <CardTitle className="text-2xl">Bank Transfer Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 space-y-4">
                <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-slate-200 pb-3 last:border-0 last:pb-0 gap-2">
                  <span className="text-muted-foreground font-medium">Account Name</span>
                  <span className="font-bold text-lg text-slate-800">{SITE_CONTENT.donation.accountName}</span>
                </div>

                <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-slate-200 pb-3 last:border-0 last:pb-0 gap-2">
                  <span className="text-muted-foreground font-medium">Bank Name</span>
                  <span className="font-medium text-slate-800">{SITE_CONTENT.donation.bankName}</span>
                </div>

                <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-slate-200 pb-3 last:border-0 last:pb-0 gap-2">
                  <span className="text-muted-foreground font-medium">Account Number</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-lg text-primary">{SITE_CONTENT.donation.accountNo}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-muted-foreground hover:text-primary"
                      onClick={() => copyToClipboard(SITE_CONTENT.donation.accountNo, "Account Number")}
                    >
                      {copiedField === "Account Number" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                  <span className="text-muted-foreground font-medium">IFSC Code</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-lg text-slate-800">{SITE_CONTENT.donation.ifsc}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-muted-foreground hover:text-primary"
                      onClick={() => copyToClipboard(SITE_CONTENT.donation.ifsc, "IFSC Code")}
                    >
                      {copiedField === "IFSC Code" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-primary hover:bg-primary/90 text-white gap-2 text-lg h-12 px-8">
                      <QrCode className="h-5 w-5" />
                      Pay Through UPI
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-center text-2xl font-serif text-primary">Scan to Donate</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col items-center space-y-6 py-4">
                      <div className="relative p-2 bg-white rounded-lg shadow-md border border-slate-100">
                        <img 
                          src="/assets/upi-qr.png" 
                          alt="UPI QR Code" 
                          className="w-64 h-64 object-contain"
                        />
                      </div>
                      
                      <div className="flex flex-col items-center gap-2 w-full">
                        <span className="text-sm font-medium text-muted-foreground">UPI ID</span>
                        <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-md border border-slate-100">
                          <span className="font-mono font-bold text-slate-800 break-all">
                            {SITE_CONTENT.donation.upiId}
                          </span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-muted-foreground hover:text-primary shrink-0"
                            onClick={() => copyToClipboard(SITE_CONTENT.donation.upiId || "", "UPI ID")}
                          >
                            {copiedField === "UPI ID" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <DialogClose asChild>
                        <Button variant="outline">Close</Button>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground italic">
                  "God Thank Indeed"
                </p>
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100 inline-block">
                  <p className="text-green-800 font-medium text-sm">
                    All donations are eligible for tax exemption under 80G.
                  </p>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
