import { useState } from 'react';
import { Download, Eye, Award, FileText, Calendar, Building, ExternalLink, X } from 'lucide-react';

export default function Documents() {
  const [selectedDocument, setSelectedDocument] = useState<any>(null);

  const certificates = [
    {
      id: 1,
      title: 'AWS Cloud Practitioner Certification',
      issuer: 'Amazon Web Services',
      type: 'Certificate',
      date: '2024-01-15',
      description: 'Foundational understanding of AWS Cloud services, security, and compliance.',
      image: 'https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=800',
      downloadUrl: '#',
      verificationUrl: 'https://aws.amazon.com/verification',
      skills: ['AWS', 'Cloud Computing', 'Infrastructure'],
      credentialId: 'AWS-CP-2024-001'
    },
    {
      id: 2,
      title: 'React Developer Professional Certificate',
      issuer: 'Meta (Facebook)',
      type: 'Certificate',
      date: '2023-11-20',
      description: 'Advanced React development skills including hooks, context API, and performance optimization.',
      image: 'https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=800',
      downloadUrl: '#',
      verificationUrl: 'https://coursera.org/verify',
      skills: ['React', 'JavaScript', 'Frontend Development'],
      credentialId: 'META-RDC-2023-002'
    },
    {
      id: 3,
      title: 'Full Stack Web Development Bootcamp',
      issuer: 'freeCodeCamp',
      type: 'Certificate',
      date: '2023-08-30',
      description: 'Complete full-stack development course covering modern web technologies.',
      image: 'https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=800',
      downloadUrl: '#',
      verificationUrl: 'https://freecodecamp.org/certification',
      skills: ['Full Stack', 'Node.js', 'MongoDB', 'React'],
      credentialId: 'FCC-FSWD-2023-003'
    }
  ];

  const internshipOffers = [
    {
      id: 4,
      title: 'Lead Full Stack Developer Internship',
      issuer: 'Dprofiz',
      type: 'Offer Letter',
      date: '2025-07-24',
      description: 'Comprehensive full-stack development internship with leadership, mentorship and real project experience.',
      image: 'https://images.pexels.com/photos/5816286/pexels-photo-5816286.jpeg?auto=compress&cs=tinysrgb&w=800',
      downloadUrl: '#',
      position: 'Full Stack Developer Intern',
      duration: '2 months',
      location: 'Remote',
      stipend: 'Unpaid'
    }
  ];

  const allDocuments = [...certificates, ...internshipOffers];

  const openDocumentModal = (document: any) => {
    setSelectedDocument(document);
  };

  const closeDocumentModal = () => {
    setSelectedDocument(null);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="animate-fade-in">
      
      {/* Header */}
      <header className="mb-12">
        <h2 className="article-title">Documents & Certificates</h2>
        <p className="text-custom-md text-text-secondary">
          Professional certifications, course completions, and internship offers
        </p>
      </header>

      {/* Certificates Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="icon-container w-10 h-10 text-white">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-custom-lg font-semibold text-text-primary">Professional Certificates</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-border-custom to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="modern-card p-6 group hover:scale-105 transition-all duration-400">
              
              {/* Certificate Preview */}
              <div className="relative mb-4 overflow-hidden rounded-custom-md bg-card-secondary">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-accent-primary text-white text-custom-xs rounded-full">
                    {cert.type}
                  </span>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="space-y-3">
                <h4 className="text-custom-md font-semibold text-text-primary line-clamp-2 group-hover:text-accent-primary transition-colors">
                  {cert.title}
                </h4>
                
                <div className="flex items-center gap-2 text-text-muted">
                  <Building className="w-4 h-4" />
                  <span className="text-custom-sm">{cert.issuer}</span>
                </div>
                
                <div className="flex items-center gap-2 text-text-muted">
                  <Calendar className="w-4 h-4" />
                  <span className="text-custom-sm">{formatDate(cert.date)}</span>
                </div>

                <p className="text-custom-sm text-text-secondary line-clamp-2">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-card-secondary text-text-secondary text-custom-xs rounded-custom-md border border-border-custom">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => openDocumentModal(cert)}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-accent-primary/10 text-accent-primary rounded-custom-md hover:bg-accent-primary/20 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="text-custom-sm">View</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internship Offers Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="icon-container w-10 h-10 text-white">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="text-custom-lg font-semibold text-text-primary">Internship Offers</h3>
          <div className="flex-1 h-px bg-gradient-to-r from-border-custom to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {internshipOffers.map((offer) => (
            <div key={offer.id} className="modern-card p-6 group hover:scale-105 transition-all duration-400">
              
              {/* Offer Preview */}
              <div className="relative mb-4 overflow-hidden rounded-custom-md bg-card-secondary">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-blue-500 text-white text-custom-xs rounded-full">
                    {offer.type}
                  </span>
                </div>
              </div>

              {/* Offer Details */}
              <div className="space-y-3">
                <h4 className="text-custom-md font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                  {offer.title}
                </h4>
                
                <div className="flex items-center gap-2 text-text-muted">
                  <Building className="w-4 h-4" />
                  <span className="text-custom-sm">{offer.issuer}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-custom-sm">
                  <div>
                    <span className="text-text-muted">Position:</span>
                    <p className="text-text-secondary font-medium">{offer.position}</p>
                  </div>
                  <div>
                    <span className="text-text-muted">Duration:</span>
                    <p className="text-text-secondary font-medium">{offer.duration}</p>
                  </div>
                  <div>
                    <span className="text-text-muted">Location:</span>
                    <p className="text-text-secondary font-medium">{offer.location}</p>
                  </div>
                  <div>
                    <span className="text-text-muted">Stipend:</span>
                    <p className="text-accent-primary font-semibold">{offer.stipend}</p>
                  </div>
                </div>

                <p className="text-custom-sm text-text-secondary">
                  {offer.description}
                </p>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => openDocumentModal(offer)}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-accent-primary/10 text-accent-primary rounded-custom-md hover:bg-accent-primary/20 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="text-custom-sm">View Offer</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Document Modal */}
      {selectedDocument && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="modern-card max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            
            <div className="sticky top-0 bg-card-bg/90 backdrop-blur-sm p-6 border-b border-border-custom">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-custom-lg font-semibold text-text-primary mb-2">
                    {selectedDocument.title}
                  </h3>
                  <div className="flex items-center gap-4 text-custom-sm text-text-muted">
                    <span className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      {selectedDocument.issuer}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(selectedDocument.date)}
                    </span>
                  </div>
                </div>
                
                <button 
                  className="p-2 rounded-custom-md bg-card-secondary hover:bg-border-custom transition-colors"
                  onClick={closeDocumentModal}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6">
              {/* Document Preview */}
              <div className="mb-6">
                <img 
                  src={selectedDocument.image} 
                  alt={selectedDocument.title}
                  className="w-full max-w-2xl mx-auto rounded-custom-lg border border-border-custom"
                />
              </div>

              {/* Document Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-custom-md font-semibold text-text-primary mb-3">Description</h4>
                  <p className="text-custom-sm text-text-secondary leading-relaxed mb-4">
                    {selectedDocument.description}
                  </p>

                  {selectedDocument.skills && (
                    <div>
                      <h4 className="text-custom-md font-semibold text-text-primary mb-3">Skills Covered</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedDocument.skills.map((skill: string, index: number) => (
                          <span key={index} className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-custom-sm rounded-custom-md">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  {selectedDocument.credentialId && (
                    <div>
                      <h4 className="text-custom-sm font-semibold text-text-primary mb-1">Credential ID</h4>
                      <p className="text-custom-sm text-text-secondary font-mono">{selectedDocument.credentialId}</p>
                    </div>
                  )}

                  {selectedDocument.position && (
                    <>
                      <div>
                        <h4 className="text-custom-sm font-semibold text-text-primary mb-1">Position</h4>
                        <p className="text-custom-sm text-text-secondary">{selectedDocument.position}</p>
                      </div>
                      <div>
                        <h4 className="text-custom-sm font-semibold text-text-primary mb-1">Duration</h4>
                        <p className="text-custom-sm text-text-secondary">{selectedDocument.duration}</p>
                      </div>
                      <div>
                        <h4 className="text-custom-sm font-semibold text-text-primary mb-1">Location</h4>
                        <p className="text-custom-sm text-text-secondary">{selectedDocument.location}</p>
                      </div>
                      <div>
                        <h4 className="text-custom-sm font-semibold text-text-primary mb-1">Stipend</h4>
                        <p className="text-custom-sm text-accent-primary font-semibold">{selectedDocument.stipend}</p>
                      </div>
                    </>
                  )}

                  {selectedDocument.verificationUrl && (
                    <div className="flex gap-3 pt-4">
                      <a
                        href={selectedDocument.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-primary text-white rounded-custom-md hover:scale-105 transition-transform"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-custom-sm">Verify</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}
